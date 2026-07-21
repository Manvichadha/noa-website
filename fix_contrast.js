const fs = require('fs');
const glob = require('glob');

const files = [
  'app/page.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'app/contact/page.tsx',
  'app/still-curious/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace text-white/30, text-white/40, text-white/50, text-white/60 with text-white/70
    content = content.replace(/text-white\/[1-6]0/g, 'text-[#A3A3A3]');
    
    // Replace placeholder-white/30 etc with placeholder-[#A3A3A3]
    content = content.replace(/placeholder-white\/[1-6]0/g, 'placeholder-[#A3A3A3]');
    
    // If there's any text-white/70 that is supposed to be body, it's already #B3B3B3 which is lighter than #A3A3A3.
    // The main body is text-white/80 which is #CCCCCC (lighter than #C7C7C7).
    
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
