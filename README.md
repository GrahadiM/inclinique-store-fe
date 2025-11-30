# Inclinique Store - Profile Page

## 📋 Daftar Isi
- [Deskripsi Proyek](#deskripsi-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur File](#struktur-file)
- [Instalasi dan Setup](#instalasi-dan-setup)
- [Cara Penggunaan](#cara-penggunaan)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance-considerations)
- [Accessibility](#accessibility-features)
- [Security](#security-considerations)
- [Integrasi Backend](#integrasi-backend)
- [Troubleshooting](#troubleshooting)
- [Development](#development-guide)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Support](#support)

## Deskripsi Proyek

Inclinique Store adalah platform e-commerce khusus produk skincare yang menyediakan pengalaman personalisasi untuk setiap pengguna. Halaman profil ini merupakan bagian integral dari platform yang memungkinkan pengguna untuk mengelola akun, pesanan, dan preferensi skincare mereka di satu tempat terpusat.

## 🚀 Fitur Utama

### 🏠 **Ringkasan Akun (Overview)**
- 📊 Dashboard statistik dengan informasi pesanan, wishlist, dan ulasan
- 📦 Ringkasan pesanan terbaru
- 🧴 Profil kulit dengan metrik kelembaban, minyak, elastisitas, dan tekstur
- 💡 Rekomendasi produk personalisasi berdasarkan profil kulit

### 📦 **Manajemen Pesanan (Orders)**
- 🔍 Filter pesanan berdasarkan status (semua, diproses, dikirim, selesai, dibatalkan)
- 📋 Detail lengkap setiap pesanan dengan tracking status
- 🔧 Tombol aksi: beli lagi, tinggalkan ulasan, lihat detail
- 📄 Pagination untuk navigasi pesanan

### 🧴 **Profil Kulit (Skin Profile)**
- 🔬 Analisis komprehensif tipe kulit (kombinasi, berminyak, kering, normal)
- 📝 Identifikasi kondisi kulit (sensitif, berjerawat, kusam, penuaan, flek, pori besar)
- 📊 Metrik detail: kelembaban, produksi minyak, elastisitas, tekstur, kemerataan warna
- ⏰ Rutinitas skincare pagi dan malam dengan timing dan frekuensi
- 🎯 Perawatan mingguan dan tujuan perawatan kulit

### ❤️ **Wishlist**
- 📌 Koleksi produk yang disimpan untuk dibeli nanti
- 🔄 Tombol wishlist toggle dengan feedback visual
- 🛒 Integrasi langsung dengan keranjang belanja
- 🏷️ Kategori produk dan status bestseller

### 📍 **Manajemen Alamat (Addresses)**
- 🏠 Multiple address management
- ⭐ Penandaan alamat utama
- ✏️ Edit dan hapus alamat
- 🇮🇩 Format alamat lengkap Indonesia

### ⚙️ **Pengaturan Akun (Settings)**
- 👤 Informasi pribadi lengkap
- 🔒 Keamanan akun (ubah password, two-factor authentication, sesi aktif)
- 🔔 Preferensi notifikasi dan marketing
- ✅ Validasi form yang komprehensif

## Teknologi yang Digunakan

### Frontend
- **HTML5** - Struktur semantic dan aksesibilitas
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome 6.4.0** - Ikon dan UI elements
- **JavaScript ES6+** - Interaktivitas dan dynamic content

### Styling & Design System
- **Color Palette**:
  - Primary Orange: `#FA812F`
  - Primary Yellow: `#FAB12F`
  - Primary Red: `#DD0303`
  - Primary Light: `#FFECC0`

- **Typography**: Font sans-serif dengan hierarchy yang jelas
- **Responsive Design**: Mobile-first approach dengan breakpoints
- **Animation**: Transitions dan micro-interactions untuk UX yang smooth

## Struktur File

```
inclinique-profile/
│
├── index.html                 # Halaman profil utama
├── assets/
│   ├── css/
│   │   ├── style.css         # Style kustom
│   │   └── responsive.css    # Media queries responsive
│   ├── js/
│   │   ├── main.js           # JavaScript utama
│   │   ├── profile.js        # Fungsi profil pengguna
│   │   ├── skin-analysis.js  # Analisis kulit
│   │   └── utils.js          # Utility functions
│   └── images/
│       ├── products/         # Gambar produk
│       ├── icons/            # Ikon custom
│       └── avatars/          # Foto profil
│
├── pages/                    # Halaman terkait
│   ├── index.html           # Homepage
│   ├── product.html         # Halaman produk
│   ├── cart.html            # Keranjang belanja
│   ├── news.html            # Beauty insider/blog
│   ├── about.html           # Tentang kami
│   └── career.html          # Karir
│
├── docs/                    # Dokumentasi
│   ├── api.md              # Dokumentasi API
│   ├── deployment.md       # Panduan deployment
│   └── design-system.md    # Design system
│
└── README.md               # Dokumentasi ini
```

## Instalasi dan Setup

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk CDN resources)

### 🛠️ Local Development

1. **Clone atau download proyek ini**
```bash
git clone https://github.com/inclinique/store-profile.git
cd inclinique-profile
```

2. **Jalankan local server**
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx http-server

# Menggunakan PHP
php -S localhost:8000

# Menggunakan Live Server (VS Code extension)
# Klik kanan index.html -> "Open with Live Server"
```

3. **Buka di browser**
```
http://localhost:8000
```

### 📦 Production Build

Untuk production, disarankan untuk:

1. **Minify assets**
```bash
# Install tools
npm install -g uglify-js clean-css-cli

# Minify JavaScript
uglifyjs assets/js/main.js -o assets/js/main.min.js

# Minify CSS
cleancss -o assets/css/style.min.css assets/css/style.css
```

2. **Optimize images**
```bash
# Convert to WebP
convert image.jpg -quality 80 image.webp
```

## Cara Penggunaan

### 🧭 Navigasi Profil

1. **Menu Sidebar**: Akses berbagai bagian profil melalui menu navigasi
2. **Tab System**: Beralih antara overview, orders, skin profile, wishlist, addresses, dan settings
3. **Mobile Navigation**: Bottom navigation untuk akses mudah di perangkat mobile

### 🧴 Manajemen Profil Kulit

1. **Pilih Tipe Kulit**: Klik kartu tipe kulit yang sesuai
2. **Identifikasi Kondisi**: Pilih kondisi kulit yang dialami
3. **Tetapkan Tujuan**: Tentukan goals perawatan kulit
4. **Update Rutinitas**: Edit rutinitas skincare pagi dan malam

### 🔧 Fitur Interaktif

- **Search Popup**: Tekan ikon search di header
- **Modal Windows**: Untuk keamanan akun dan pengaturan
- **Filter Orders**: Filter berdasarkan status pesanan
- **Wishlist Toggle**: Klik hati untuk menambah/menghapus dari wishlist

## Customization

### 🎨 Warna Theme

Ubah variabel warna di section CSS:

```css
:root {
  --primary-orange: #FA812F;
  --primary-yellow: #FAB12F;
  --primary-red: #DD0303;
  --primary-light: #FFECC0;
}

/* Atau update class Tailwind */
.bg-primary-orange { background-color: #FA812F; }
.text-primary-orange { color: #FA812F; }
```

### 📝 Konten Dinamis

Untuk integrasi dengan backend, update bagian-bagian berikut:

```javascript
// Contoh update data pengguna
const userData = {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    joinDate: "April 2022",
    points: 1250,
    tier: "Gold",
    skinType: "combination",
    sensitivity: 7
};

// Update UI dengan data
function updateUserProfile(data) {
    document.querySelector('.user-name').textContent = data.name;
    document.querySelector('.user-email').textContent = data.email;
    document.querySelector('.user-points').textContent = data.points;
    // ... update lainnya
}
```

### ➕ Tambahan Halaman

Setiap tab dapat dikembangkan menjadi halaman terpisah:

- `profile/orders.html` - Halaman pesanan lengkap
- `profile/skin-analysis.html` - Analisis kulit detail
- `profile/settings.html` - Pengaturan akun

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

## Performance Considerations

### 🖼️ Optimasi Gambar
```html
<!-- Gunakan WebP dengan fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### ⚡ JavaScript Optimization
```javascript
// Debounce search functionality
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy load tab content
function loadTabContent(tabId) {
  if (!loadedTabs.has(tabId)) {
    fetch(`/api/${tabId}`)
      .then(response => response.json())
      .then(data => renderTabContent(tabId, data));
    loadedTabs.add(tabId);
  }
}
```

### 🎨 CSS Optimization
```css
/* Critical CSS untuk above-the-fold content */
.critical {
  /* Styles yang diperlukan untuk render awal */
}

/* Non-critical CSS */
.non-critical {
  /* Styles yang bisa di-load setelahnya */
}
```

## Accessibility Features

- ♿ **ARIA Labels**: Semua elemen interaktif memiliki label aksesibilitas
- ⌨️ **Keyboard Navigation**: Support navigasi dengan keyboard
- 📖 **Screen Reader**: Struktur semantic yang baik
- 🎨 **Color Contrast**: Memenuhi standar WCAG 2.1
- 🔍 **Focus Management**: Focus trapping untuk modal

## Security Considerations

### 🔒 Client-Side Security
```javascript
// Input validation
function validateForm(formData) {
  const errors = [];
  
  // Email validation
  if (!isValidEmail(formData.email)) {
    errors.push('Format email tidak valid');
  }
  
  // Phone validation
  if (!isValidPhone(formData.phone)) {
    errors.push('Format nomor telepon tidak valid');
  }
  
  return errors;
}

// XSS prevention
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}
```

### 🔐 Backend Integration Security
```javascript
// CSRF token handling
function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

// Secure API calls
async function apiCall(endpoint, data) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCSRFToken(),
    },
    body: JSON.stringify(data),
    credentials: 'same-origin'
  });
  
  return response.json();
}
```

## Integrasi Backend

### 📡 API Endpoints yang Diperlukan

```javascript
// User Profile
const API_ENDPOINTS = {
  // User Profile
  USER_PROFILE: '/api/user/profile',
  UPDATE_PROFILE: '/api/user/profile',
  
  // Orders
  ORDERS: '/api/orders',
  ORDER_DETAIL: '/api/orders/{id}',
  ORDER_TRACKING: '/api/orders/{id}/tracking',
  
  // Skin Analysis
  SKIN_PROFILE: '/api/skin-profile',
  SKIN_ANALYSIS: '/api/skin-analysis',
  UPDATE_SKIN_PROFILE: '/api/skin-profile',
  
  // Wishlist
  WISHLIST: '/api/wishlist',
  ADD_TO_WISHLIST: '/api/wishlist/{productId}',
  REMOVE_FROM_WISHLIST: '/api/wishlist/{productId}',
  
  // Addresses
  ADDRESSES: '/api/addresses',
  ADD_ADDRESS: '/api/addresses',
  UPDATE_ADDRESS: '/api/addresses/{id}',
  DELETE_ADDRESS: '/api/addresses/{id}',
  SET_DEFAULT_ADDRESS: '/api/addresses/{id}/default'
};
```

### 📊 Data Structure Examples

```json
{
  "user": {
    "id": "user_123",
    "name": "Sarah Johnson",
    "email": "sarah.j@email.com",
    "phone": "+6281234567890",
    "birthDate": "1995-08-15",
    "gender": "female",
    "joinDate": "2022-04-15",
    "points": 1250,
    "tier": "Gold",
    "avatar": "/assets/images/avatars/user_123.jpg"
  },
  "skinProfile": {
    "type": "combination",
    "conditions": ["sensitive", "dull"],
    "sensitivity": 7,
    "metrics": {
      "hydration": 68,
      "oil": 72,
      "elasticity": 82,
      "texture": 65,
      "evenness": 58,
      "poreVisibility": 75
    },
    "goals": ["hydration", "sensitivity"],
    "lastUpdated": "2024-03-01T00:00:00Z"
  },
  "preferences": {
    "marketingEmails": true,
    "orderNotifications": true,
    "productNotifications": false,
    "beautyArticles": true
  }
}
```

### 🔄 Contoh API Implementation

```javascript
class ProfileAPI {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
  }
  
  async getUserProfile() {
    const response = await fetch(`${this.baseURL}/user/profile`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
  }
  
  async updateUserProfile(profileData) {
    const response = await fetch(`${this.baseURL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData)
    });
    
    if (!response.ok) throw new Error('Failed to update profile');
    return response.json();
  }
  
  async getOrders(filters = {}) {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(`${this.baseURL}/orders?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch orders');
    return response.json();
  }
}

// Usage
const api = new ProfileAPI();
const userProfile = await api.getUserProfile();
```

## Troubleshooting

### ❌ Common Issues

1. **Modal tidak terbuka**
   - Pastikan JavaScript ter-load dengan benar
   - Check console untuk error
   - Verifikasi element IDs di HTML dan JavaScript

2. **Style tidak konsisten**
   - Periksa koneksi CDN Tailwind CSS
   - Pastikan custom CSS ter-load setelah Tailwind
   - Check browser cache

3. **Form tidak submit**
   - Check console untuk error JavaScript
   - Verifikasi event listeners
   - Pastikan form validation tidak blocking submit

### 🐛 Debugging Tips

```javascript
// Enable debug mode
localStorage.setItem('debug', 'true');

// Debug function
function debug(message, data = null) {
  if (localStorage.getItem('debug') === 'true') {
    console.log(`[DEBUG] ${message}`, data);
  }
}

// Check element existence
function validateElements() {
  const requiredElements = [
    'search-toggle-mobile',
    'menu-toggle',
    'sidebar',
    'search-popup'
  ];
  
  requiredElements.forEach(id => {
    const element = document.getElementById(id);
    console.log(`${id}:`, element ? 'Found' : 'NOT FOUND');
  });
}

// Call on load
document.addEventListener('DOMContentLoaded', validateElements);
```

## Development Guide

### 🏗️ Project Structure Best Practices

```
src/
├── components/           # Reusable components
│   ├── modal/
│   ├── tab/
│   └── card/
├── services/            # API services
│   ├── user-service.js
│   ├── order-service.js
│   └── skin-service.js
├── utils/               # Utility functions
│   ├── validators.js
│   ├── formatters.js
│   └── helpers.js
└── styles/              # CSS modules
    ├── base.css
    ├── components.css
    └── utilities.css
```

### 🔧 Development Scripts

```json
{
  "scripts": {
    "dev": "live-server --port=3000",
    "build": "npm run build:css && npm run build:js",
    "build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
    "build:js": "uglifyjs ./src/js/*.js -o ./dist/app.min.js",
    "lint": "eslint ./src/js/**/*.js",
    "test": "jest"
  }
}
```

### 🧪 Testing

```javascript
// Example test with Jest
describe('Profile Page', () => {
  test('should toggle sidebar correctly', () => {
    document.body.innerHTML = `
      <div id="sidebar" class="sidebar"></div>
      <button id="menu-toggle"></button>
    `;
    
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('menu-toggle');
    
    // Simulate click
    toggleBtn.click();
    
    expect(sidebar.classList.contains('open')).toBe(true);
  });
  
  test('should validate email format', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });
});
```

## Deployment

### 📦 Build untuk Production

1. **Optimize assets**
```bash
# Install dependencies
npm install -g uglify-js clean-css-cli

# Minify CSS
cleancss -o assets/css/style.min.css assets/css/style.css

# Minify JavaScript
uglifyjs assets/js/main.js assets/js/profile.js -o assets/js/app.min.js
```

2. **Optimize images**
```bash
# Convert to WebP (requires ImageMagick)
convert image.jpg -quality 80 image.webp

# Optimize PNG
pngquant --quality=65-80 image.png
```

3. **CDN Setup**
```html
<!-- Replace local assets with CDN -->
<link href="https://cdn.tailwindcss.com" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### 🚀 Deployment Platforms

**Netlify**
```yaml
# netlify.toml
[build]
  publish = "."
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Vercel**
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

**Shared Hosting**
- Upload semua file ke public_html
- Pastikan .htaccess configured properly
```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## API Documentation

### 📚 Endpoint Details

#### GET /api/user/profile
Mengambil data profil pengguna

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "Sarah Johnson",
      "email": "sarah.j@email.com",
      "phone": "+6281234567890",
      "birthDate": "1995-08-15",
      "gender": "female",
      "joinDate": "2022-04-15",
      "points": 1250,
      "tier": "Gold"
    }
  }
}
```

#### PUT /api/user/profile
Update profil pengguna

**Request Body:**
```json
{
  "name": "Sarah Johnson Updated",
  "email": "sarah.updated@email.com",
  "phone": "+6281234567891",
  "birthDate": "1995-08-15",
  "gender": "female"
}
```

#### GET /api/orders
Mengambil daftar pesanan dengan filter

**Query Parameters:**
- `status` - Filter by status (processing, shipped, completed, cancelled)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

## Testing

### 🧪 Test Setup

```javascript
// Jest configuration
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.js'],
  moduleNameMapping: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};

// Example component test
import { render, fireEvent } from '@testing-library/react';

describe('Profile Component', () => {
  it('should display user information', () => {
    const { getByText } = render(<Profile user={mockUser} />);
    expect(getByText('Sarah Johnson')).toBeInTheDocument();
  });
  
  it('should handle form submission', async () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <ProfileForm onSubmit={mockSubmit} />
    );
    
    fireEvent.change(getByLabelText('Name'), {
      target: { value: 'New Name' }
    });
    
    fireEvent.click(getByText('Save Changes'));
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({ name: 'New Name' });
    });
  });
});
```

### 📊 Performance Testing

```javascript
// Lighthouse CI configuration
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run serve',
      url: ['http://localhost:3000/profile'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports',
    },
  },
};
```

## Contributing

### 🤝 Cara Kontribusi

1. **Fork repository**
2. **Buat feature branch**
```bash
git checkout -b feature/AmazingFeature
```
3. **Commit changes**
```bash
git commit -m 'Add some AmazingFeature'
```
4. **Push to branch**
```bash
git push origin feature/AmazingFeature
```
5. **Open Pull Request**

### 📝 Coding Standards

**JavaScript**
```javascript
// Use ES6+ features
const userService = {
  async getUserProfile() {
    try {
      const response = await fetch('/api/user/profile');
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw error;
    }
  }
};

// Use descriptive variable names
const userProfileData = await userService.getUserProfile();
```

**CSS**
```css
/* Use BEM methodology */
.profile-card { }
.profile-card__header { }
.profile-card__body { }
.profile-card--featured { }
```

### 🔍 Code Review Checklist

- [ ] Code follows project standards
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Accessibility considerations
- [ ] Performance impact assessed
- [ ] Mobile responsive
- [ ] Cross-browser tested

## Changelog

### v1.0.0 (Current Release)
**🎉 Initial Release**
- ✅ Profile overview dengan statistik
- ✅ Manajemen pesanan dengan filter
- ✅ Profil kulit komprehensif
- ✅ Wishlist management
- ✅ Address management
- ✅ Account settings
- ✅ Responsive design
- ✅ Accessibility features

### v1.1.0 (Planned)
**🚀 Enhanced Features**
- [ ] Integration dengan AI skin analysis
- [ ] Video consultation feature
- [ ] Social sharing capabilities
- [ ] Advanced product recommendations
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] PWA capabilities

### v1.2.0 (Roadmap)
**📈 Advanced Features**
- [ ] Skin progress tracking
- [ ] Product routine builder
- [ ] Community features
- [ ] Advanced analytics
- [ ] Integration with wearables

## License

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

```text
MIT License

Copyright (c) 2024 Inclinique Store

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Support

### 📞 Contact Information

- 📧 **Email**: dev@incliniquestore.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/inclinique/store-profile/issues)
- 💬 **Discord**: [Community Server](https://discord.gg/inclinique)
- 📚 **Documentation**: [Docs Site](https://docs.incliniquestore.com)

### 🆘 Support Channels

| Channel | Purpose | Response Time |
|---------|---------|---------------|
| GitHub Issues | Bug reports, feature requests | 1-2 business days |
| Email | General inquiries, support | 24-48 hours |
| Discord | Community support, quick questions | Real-time |
| Documentation | Self-help, guides | Instant |

### 🔧 Troubleshooting Guide

**Common Issues and Solutions:**

1. **Profile not loading**
   - Clear browser cache and cookies
   - Check internet connection
   - Verify API endpoints are accessible

2. **Images not displaying**
   - Check image paths
   - Verify CDN is working
   - Check browser console for 404 errors

3. **Forms not submitting**
   - Check JavaScript console for errors
   - Verify all required fields are filled
   - Check network tab for failed requests

## Credits

### 👥 Development Team

- **Lead Developer**: [Nama Developer]
- **UI/UX Design**: [Nama Designer]
- **Backend Integration**: [Nama Backend Developer]
- **QA Testing**: [Nama Tester]

### 🔗 Third-Party Resources

- **Design System**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Images**: [Unsplash](https://unsplash.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)

### 🙏 Special Thanks

- Inclinique Beauty Experts Team
- Beta Testers Community
- Open Source Contributors

---

**Inclinique Store** - Personalized Beauty Experience 🧴✨

*"Kecantikan dimulai dengan perawatan yang tepat"*