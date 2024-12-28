import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookie-consent', 'all');
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
    localStorage.setItem('cookie-consent', 'necessary');
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowCustomize(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-secondary-200"
        >
          <div className="container mx-auto px-4 py-6">
            {!showCustomize ? (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-secondary-600 text-sm md:text-base">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="text-secondary-600 hover:text-secondary-900 text-sm font-medium"
                  >
                    Customize
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm font-medium text-secondary-600 hover:text-secondary-900"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-secondary-900">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="text-secondary-600 hover:text-secondary-900"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-secondary-900">Necessary</p>
                      <p className="text-sm text-secondary-600">Required for the website to function</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="rounded text-primary-600"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-secondary-900">Analytics</p>
                      <p className="text-sm text-secondary-600">Help us improve our website</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        analytics: e.target.checked
                      }))}
                      className="rounded text-primary-600"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-secondary-900">Marketing</p>
                      <p className="text-sm text-secondary-600">Personalized content and ads</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        marketing: e.target.checked
                      }))}
                      className="rounded text-primary-600"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 