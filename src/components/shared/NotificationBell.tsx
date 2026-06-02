"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add your family group phone numbers here - any number in this list will be valid
const VALID_PHONES = [
  "9447087940",
  "9562209636",
  "9847763712",
  "7510779750",
  "8129920375",
  "528575849",
  "7736670636",
  "7025550741",
  "9645949118",
  "7592966118",
  "8547146583",
  "7994369987",
  "8921641465",
  "7411668840",
  "9074552908",
  "8078549282",
  "9746040615",
  "7012195913",
  "9495662854",
  "9037286328",
  "9103150801",
  "9895826398",
  "7558054410",
  "7736441398",
  "9526019540",
  "9746783187",
  "9747255404",
  "8281741850",
  "9995561399",
  "8891587331",
  "8129707303",
  "8113802454",
  "8075723917",
  "7012277583",
  "7306784415",
  "9447881583",
  "9633533043",
  "9995599126",
  "8078859648",
  "9747375710",
  "9778317800",
  "9961155671",
  "7025183433",
  "9656598133",
  "9400820762",
  "9995287285",
  "91024177",
  "9526816032",
  "545075263"
];

export default function NotificationBell() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const initialTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initial tooltip for 5 seconds
  useEffect(() => {
    initialTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Show tooltip on hover
  useEffect(() => {
    if (isHovered) {
      setShowTooltip(true);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    } else {
      // Hide tooltip 2 seconds after mouse leaves
      hoverTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  }, [isHovered]);

  const handleBellClick = () => {
    // Clear any existing timeouts
    if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowTooltip(false);
    setShowModal(true);
  };

  const handleVerify = () => {
    if (VALID_PHONES.includes(phoneNumber)) {
      setShowModal(false);
      setPhoneNumber("");
      setError("");
      setShowMessageModal(true);
    } else {
      setError("Number not found in family group");
    }
  };

  return (
    <>
      {/* Bell Icon */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleBellClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-amber-500/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
        title="Special Message"
      >
        <motion.div
          animate={showTooltip ? { rotate: [-15, 15, -15, 0] } : {}}
          transition={{ duration: 0.5, repeat: showTooltip ? 1 : 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </motion.div>

        {/* Red notification dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />

        {/* Tooltip - right side of bell, centered vertically */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl px-4 py-2 whitespace-nowrap"
            >
              <p className="font-['Anek_Malayalam'] text-rose-700 text-base">
                കുടുംബാങ്ങൾക്കുള്ള മെസ്സേജ്
              </p>
              {/* Arrow pointing right to bell */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Verify Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm"
            >
              {/* Bell Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center mb-4">
                <span className="text-3xl">🔔</span>
              </div>

              <h2 className="font-['Anek_Malayalam'] text-xl text-center text-rose-700 mb-2">
                കുടുംബ ഗ്രൂപ്പിലെ അംഗമാണെന്ന് സ്ഥിരീകരിക്കുക
              </h2>
              <div className="space-y-4">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-400 outline-none text-center font-medium"
                  maxLength={10}
                />
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleVerify}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-lg"
                >
                  Verify
                </motion.button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full py-2 text-rose-500 hover:text-rose-700"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Modal */}
      <AnimatePresence>
        {showMessageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowMessageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center"
            >
              {/* Confetti emoji */}
              <div className="text-5xl mb-4">🎉</div>

              <h2 className="font-['Anek_Malayalam'] font-bold text-2xl text-blue-900 mb-4">
                നേവി  ബ്ലൂ ഡ്രസ്സ്‌  മറക്കല്ലേ!!!
              </h2>

              <p className="font-['Anek_Malayalam'] text-xl text-rose-600 mb-6">
                നമ്മുക്ക് അടിച്ചു പൊളിക്കേണ്ടതാണ്
              </p>

              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mb-6" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowMessageModal(false)}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-bold shadow-lg"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}