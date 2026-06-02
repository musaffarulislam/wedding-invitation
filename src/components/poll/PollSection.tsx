"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export default function PollSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    { id: "yes", text: "XoÀ¨bmbpw  F¯nt¨cpw", votes: 12 },
    { id: "definitely", text: "Dd¸mbpw F¯nt¨cpw", votes: 8 },
  ]);

  const totalVotes = pollOptions.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    setSelectedOption(optionId);
    setPollOptions(prev =>
      prev.map(opt =>
        opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
      )
    );
    setHasVoted(true);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-stone-50 to-amber-50 overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-amber-700/20 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r border-t border-amber-700/20 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-amber-700/20 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-amber-700/20 rounded-br-lg" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-4 md:px-8 py-8 flex flex-col items-center">
        {/* Poll Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-rose-300/50"
        >
          <span className="text-3xl">📋</span>
        </motion.div>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-swasam)] text-2xl md:text-3xl text-rose-700 mb-2">
          hnhml¯nÂ F¯nt¨cptam?
        </h2>

        {/* Poll Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-rose-200/30 border border-rose-200/40"
        >
          <AnimatePresence mode="wait">
            {!hasVoted ? (
              <motion.div
                key="voting"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {pollOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleVote(option.id)}
                    className="font-[family-name:var(--font-swasam)] w-full p-4 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200/50 hover:border-rose-400 transition-all text-left flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-rose-800 font-medium">{option.text}</span>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-rose-700">{totalVotes}</p>
                  <p className="text-rose-600/70 text-sm">Total Responses</p>
                </div>

                {pollOptions
                  .sort((a, b) => b.votes - a.votes)
                  .map((option, index) => {
                    const percentage = Math.round((option.votes / totalVotes) * 100);
                    const isSelected = option.id === selectedOption;

                    return (
                      <div key={option.id} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className={`font-[family-name:var(--font-swasam)] font-medium ${isSelected ? 'text-rose-700' : 'text-rose-600'}`}>
                            {isSelected && <span className="mr-2">✓ </span>}
                            {option.text}
                          </span>
                          <span className="text-rose-500 font-bold">{percentage}%</span>
                        </div>
                        <div className="h-3 bg-rose-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-full rounded-full ${isSelected ? 'bg-gradient-to-r from-rose-500 to-pink-500' : 'bg-gradient-to-r from-amber-400 to-yellow-500'}`}
                          />
                        </div>
                      </div>
                    );
                  })}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setHasVoted(false);
                    setSelectedOption(null);
                  }}
                  className="mt-6 w-full py-3 rounded-xl bg-rose-100 text-rose-600 font-medium hover:bg-rose-200 transition-colors"
                >
                  Change Vote
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}