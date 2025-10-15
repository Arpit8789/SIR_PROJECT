import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';

const CreateTestTerminal = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    company: '',
    package: ''
  });
  const [preview, setPreview] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.photo && formData.name && formData.company && formData.package) {
      onAdd(formData);
      setFormData({ photo: '', name: '', company: '', package: '' });
      setPreview('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Create New Testimonial</h2>
      
      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <div className="bg-green-500 rounded-full p-1">
            <Check className="text-white" size={16} />
          </div>
          <p className="text-green-700 font-medium">Testimonial created successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-slate-700 font-semibold mb-3">Student Photo</label>
          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 overflow-hidden">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Upload className="text-slate-400" size={32} />
              )}
            </div>
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="photo-upload"
                required
              />
              <label
                htmlFor="photo-upload"
                className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg cursor-pointer font-medium transition-colors duration-200"
              >
                Choose Photo
              </label>
              <p className="text-slate-500 text-sm mt-2">Upload a clear student photo (JPG, PNG)</p>
            </div>
          </div>
        </div>

        {/* Student Name */}
        <div>
          <label className="block text-slate-700 font-semibold mb-3">Student Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter student name"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-slate-700 font-semibold mb-3">Company Name</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Enter company name"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            required
          />
        </div>

        {/* Package Name */}
        <div>
          <label className="block text-slate-700 font-semibold mb-3">Package</label>
          <input
            type="text"
            value={formData.package}
            onChange={(e) => setFormData({ ...formData, package: e.target.value })}
            placeholder="e.g., ₹15 LPA"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Save Testimonial
        </button>
      </form>
    </div>
  );
};

export default CreateTestTerminal;
