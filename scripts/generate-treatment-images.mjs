#!/usr/bin/env node

/**
 * Generate AI treatment cover images for The Skin Aesthetic
 * Uses KIE AI (GPT-4o Image) API
 *
 * Usage: node scripts/generate-treatment-images.mjs
 */

const API_KEY = process.env.KIEAI_API_KEY;
const GENERATE_URL = 'https://api.kie.ai/api/v1/gpt4o-image/generate';
const STATUS_URL = 'https://api.kie.ai/api/v1/gpt4o-image/record-info';

if (!API_KEY) {
  console.error('❌ Missing KIEAI_API_KEY environment variable');
  process.exit(1);
}

const treatments = [
  {
    filename: 'treatment-microderm.png',
    prompt:
      'Elegant close-up of a professional microdermabrasion treatment being performed on a woman\'s face. Soft warm lighting, clean clinical setting with warm beige and cream tones. The aesthetician\'s gloved hands hold a diamond-tip microdermabrasion device on the client\'s cheek. Shallow depth of field, luxurious spa aesthetic. Muted rose gold and soft white color palette. Professional beauty photography style, no text.',
  },
  {
    filename: 'treatment-deep-cleansing.png',
    prompt:
      'Beautiful overhead close-up of a deep facial cleansing treatment. A woman lies on a treatment bed with eyes closed, looking relaxed. The aesthetician applies a foamy cleanser with gentle circular motions. Soft warm lighting, cream and beige tones, minimalist spa setting. Professional beauty treatment photography, luxurious feel, shallow depth of field. Muted rose gold accents. No text.',
  },
  {
    filename: 'treatment-chemical-peel.png',
    prompt:
      'Close-up of a professional chemical peeling treatment application on smooth skin. An aesthetician\'s gloved hand uses a fan brush to apply a translucent serum on a woman\'s face. Clean clinical aesthetic with warm soft lighting. Cream, beige, and soft white tones. Luxurious professional spa photography with shallow depth of field. No text.',
  },
  {
    filename: 'treatment-anti-aging.png',
    prompt:
      'Elegant beauty shot of an anti-aging facial treatment. Close-up of a woman\'s face receiving a professional rejuvenating treatment with a specialized device emitting soft light. Warm beige and rose gold tones, clean minimalist spa setting. Professional beauty photography, luxurious atmosphere, shallow depth of field. No text.',
  },
  {
    filename: 'treatment-hydration.png',
    prompt:
      'Beautiful close-up of a deep hydration facial treatment. A sheet mask or hyaluronic acid serum being applied to a woman\'s glowing skin. Dewdrops of moisture visible on the skin surface. Soft warm lighting with cream and beige tones. Clean minimalist spa aesthetic, professional beauty photography. Rose gold accents. No text.',
  },
  {
    filename: 'treatment-laser.png',
    prompt:
      'Professional laser skin treatment in an elegant clinical setting. Close-up of a handheld laser device being applied to a woman\'s face, with soft ambient light. Clean modern aesthetic with warm beige and cream tones. The device emits a subtle soft glow. Professional beauty photography, luxurious medical spa feel, shallow depth of field. No text.',
  },
];

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

async function generateImage(treatment) {
  console.log(`\n🎨 Generating: ${treatment.filename}`);
  console.log(`   Prompt: ${treatment.prompt.slice(0, 80)}...`);

  const response = await fetch(GENERATE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      prompt: treatment.prompt,
      size: '1:1',
      isEnhance: false,
      enableFallback: true,
      fallbackModel: 'FLUX_MAX',
    }),
  });

  const result = await response.json();

  if (result.code !== 200) {
    console.error(`   ❌ Failed to submit: ${result.msg}`);
    return null;
  }

  const taskId = result.data.taskId;
  console.log(`   ✅ Task submitted: ${taskId}`);
  return { ...treatment, taskId };
}

async function pollForResult(taskId, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise((r) => setTimeout(r, 10000)); // Wait 10 seconds

    const response = await fetch(`${STATUS_URL}?taskId=${taskId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${API_KEY}` },
    });

    const result = await response.json();

    if (result.code !== 200) {
      console.log(`   ⏳ Poll ${i + 1}/${maxAttempts} — API error, retrying...`);
      continue;
    }

    const data = result.data;
    const flag = data?.successFlag;

    if (flag === 1) {
      const urls =
        data?.response?.resultUrls ||
        data?.info?.result_urls ||
        data?.result_urls ||
        [];
      if (urls.length > 0) {
        return urls[0];
      }
      // Try to find URL in nested structure
      console.log(`   ⚠️  Success but no URLs found. Data:`, JSON.stringify(data).slice(0, 200));
      return null;
    }

    if (flag === 2) {
      console.log(`   ❌ Generation failed: ${data?.errorMessage || 'Unknown error'}`);
      return null;
    }

    const progress = data?.progress || '?';
    console.log(`   ⏳ Poll ${i + 1}/${maxAttempts} — Progress: ${progress}`);
  }

  console.log(`   ❌ Timed out after ${maxAttempts} polls`);
  return null;
}

async function downloadImage(url, filename) {
  const { writeFile } = await import('fs/promises');
  const { join } = await import('path');

  const destPath = join(process.cwd(), 'public', 'treatments', filename);

  // Ensure directory exists
  const { mkdir } = await import('fs/promises');
  await mkdir(join(process.cwd(), 'public', 'treatments'), { recursive: true });

  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destPath, buffer);

  console.log(`   💾 Saved: public/treatments/${filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
  return destPath;
}

async function main() {
  console.log('🚀 Generating treatment cover images with KIE AI (GPT-4o Image)');
  console.log(`   Generating ${treatments.length} images...\n`);

  // Submit all generation requests in parallel
  const tasks = await Promise.all(treatments.map(generateImage));
  const validTasks = tasks.filter(Boolean);

  console.log(`\n📡 ${validTasks.length} tasks submitted. Polling for results...\n`);

  // Poll for each result
  for (const task of validTasks) {
    console.log(`\n⏳ Waiting for: ${task.filename} (task: ${task.taskId})`);
    const imageUrl = await pollForResult(task.taskId);

    if (imageUrl) {
      console.log(`   🖼️  Image URL: ${imageUrl}`);
      await downloadImage(imageUrl, task.filename);
    } else {
      console.log(`   ❌ Could not retrieve image for ${task.filename}`);
    }
  }

  console.log('\n✨ Done! Images saved to public/treatments/');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
