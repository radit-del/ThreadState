
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askGemini = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResponse(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: "Anda adalah pakar raw denim yang memiliki pengalaman 20 tahun dalam dunia denim selvedge, jeans buatan Jepang, dan perawatan denim. Berikan saran yang praktis, edukatif, dan penuh semangat dalam bahasa Indonesia. Jangan terlalu kaku.",
        }
      });
      
      setResponse(result.text || "Maaf, saya tidak bisa menemukan jawaban untuk itu saat ini.");
    } catch (error) {
      console.error(error);
      setResponse("Aduh, mesin saya sepertinya butuh 'soak' juga. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && askGemini()}
          placeholder="Tanya soal soaking, washing, atau fading..."
          className="w-full pl-6 pr-16 py-4 rounded-2xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-white placeholder:text-slate-600"
        />
        <button 
          onClick={askGemini}
          disabled={loading || !input.trim()}
          className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 disabled:opacity-50 transition-all flex items-center justify-center"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </div>
      
      {response && (
        <div className="mt-6 p-6 bg-indigo-900/20 border border-indigo-500/20 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-indigo-100 leading-relaxed whitespace-pre-wrap">
            {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
