const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.warn(`API call failed for ${endpoint}, using fallback context:`, error);
    return null;
  }
}

export const getCompanySettings = () => fetchAPI('/settings');
export const getHeroSliders = () => fetchAPI('/hero-sliders');
export const getAboutSection = () => fetchAPI('/about');
export const getServices = () => fetchAPI('/services');
export const getServiceBySlug = (slug) => fetchAPI(`/services/${slug}`);
export const getPackages = () => fetchAPI('/packages');
export const getPackageBySlug = (slug) => fetchAPI(`/packages/${slug}`);
export const getGalleryItems = (category = 'all') => fetchAPI(`/gallery?category=${category}`);
export const getTestimonials = () => fetchAPI('/testimonials');
export const getBrands = () => fetchAPI('/brands');
export const getFaqs = () => fetchAPI('/faqs');
export const getProcessSteps = () => fetchAPI('/process-steps');

export const sendContactEnquiry = async (formData) => {
  return fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
