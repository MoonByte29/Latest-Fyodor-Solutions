import React from 'react';
import { X } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    id: number;
    title: string;
    blog: string;
    image: string;
  } | null;
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, blog }) => {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-b from-slate-900/95 to-blue-950/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-700/30 max-w-4xl w-full max-h-[90vh] animate-in fade-in zoom-in-95 duration-300 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white transition-colors duration-200 border border-slate-600/50"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900/30" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col min-h-0">
            <div className="p-8 overflow-y-auto flex-1">
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
                {blog.blog}
              </p>
              
              {/* Additional content sections */}
              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Insights</h3>
                  <p className="leading-relaxed">
                    This comprehensive analysis explores the transformative impact of emerging technologies 
                    on modern business practices. Our research indicates significant opportunities for 
                    organizations willing to embrace innovative solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Implementation Strategy</h3>
                  <p className="leading-relaxed">
                    Successful implementation requires a strategic approach that balances innovation 
                    with practical considerations. Organizations should focus on gradual adoption 
                    while maintaining operational excellence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Future Outlook</h3>
                  <p className="leading-relaxed">
                    The landscape continues to evolve rapidly, presenting both challenges and 
                    opportunities. Companies that stay ahead of these trends will be best 
                    positioned for long-term success.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;