'use strict';

// # All
// /^npm-debug\.log$/,           // npm error log
// /^\..*\.swp$/,                // vim state
// // macOS
// /^\.DS_Store$/,               // stores custom folder attributes
// /^\.AppleDouble$/,            // stores additional file resources
// /^\.LSOverride$/,             // contains the absolute path to the app to be used
// /^Icon\r$/,                   // custom Finder icon: http://superuser.com/questions/298785/icon-file-on-os-x-desktop
// /^\._.*/,                     // thumbnail
// /^\.Spotlight-V100(?:$|\/)/,  // directory that might appear on external disk
// /\.Trashes/,                  // file that might appear on external disk
// /^__MACOSX$/,                 // resource fork
// # Linux
// /~$/,                         // backup file
// # Windows
// /^Thumbs\.db$/,               // image file cache
// /^ehthumbs\.db$/,             // folder config file
// /^Desktop\.ini$/              // stores custom folder attributes

exports.re = /^npm-debug\.log$|^\..*\.swp$|^\.DS_Store$|^\.AppleDouble$|^\.LSOverride$|^Icon\r$|^\._.*|^\.Spotlight-V100(?:$|\/)|\.Trashes|^__MACOSX$|~$|^Thumbs\.db$|^ehthumbs\.db$|^Desktop\.ini$/;

exports.is = filename => exports.re.test(filename);

exports.not = filename => !exports.is(filename);
