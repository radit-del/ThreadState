
import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag, CheckCircle } from 'lucide-react';
import { CartItem } from '../App';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const total = items.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + (priceNum * item.quantity);
  }, 0);

  const formatPrice = (val: number) => {
    return "Rp " + val.toLocaleString('id-ID');
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Here we would normally clear the cart via parent
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-[#020617] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 border-l border-white/5">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-indigo-400" />
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Keranjang</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-slate-700">
                <ShoppingBag size={40} />
              </div>
              <p className="text-slate-400">Keranjang Anda kosong.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-indigo-400 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 border border-white/5">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-sm leading-tight">{item.name}</h3>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-slate-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-indigo-400 text-sm font-bold mt-1">{item.price}</p>
                  
                  <div className="mt-auto flex items-center gap-4">
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="p-1 text-slate-400 hover:text-white"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="p-1 text-slate-400 hover:text-white"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-white/10 bg-black/40">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400 font-medium">Total Estimasi</span>
              <span className="text-2xl font-bold text-white">{formatPrice(total)}</span>
            </div>
            
            <button 
              disabled={isCheckingOut || isSuccess}
              onClick={handleCheckout}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                isSuccess 
                ? 'bg-emerald-600 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-900/20'
              }`}
            >
              {isCheckingOut ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memproses...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle size={20} />
                  Pesanan Berhasil!
                </>
              ) : (
                <>
                  <CreditCard size={20} />
                  Checkout Sekarang
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-bold">
              Secure Payment • Indigo Verified
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
