import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router';
import daisyui from 'daisyui';
import api from "../lib/axios"
import toast from 'react-hot-toast';



const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState('');
  
    const handleSubmit =  async (e) => {
        e.preventDefault();

    if(!title.trim() || !content.trim()) {
        toast.error("Please fill in all fields");
        return;
    }
    setLoading(true);
    try {
        await api.post("/notes", {
            title, 
            content
        })
        toast.success("Note Created Successfully");
    } catch(error) {
        console.log("Error Created", error);
       if(error.response.status === 429) {
        toast.error("Slow Down You are Creating Notes too fast", {
            duration:4000,
            icon:"skull"
        })
       } else {
        toast.error("Error Creating Note");
       }
    } finally { 
        setLoading(false);
    }
}

   return (
     <div className="w-full max-w-sm mx-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-3">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                   <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                   <div className="mb-4">
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
