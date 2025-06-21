import React from 'react'
import Navbar from '../src/Components/Navbar';
import { useState, useEffect } from 'react';
import RateLimitUI from '../src/Components/RateLimitUI';
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../src/Components/NoteCard';
import daisyui from "daisyui";
import api from "../lib/axios"
import { formateDate } from '../lib/utils';




const HomePage = () => {
const [isRateLimited, setisRateLimited] = useState(false); 
const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchNotes = async () => {
        try { 
            const res = await api.get("/notes");
            setNotes(res.data);
            console.log(res.data); 
            setNotes(res.data);
            setisRateLimited(false);
        } catch(error) { 
            console.error("Error fetching notes:", error);
            if(error.response?.status === 429) {
                setisRateLimited(true);
            } else {
                toast.error("Failed To Load Nodes");
            }
        } finally {
            setLoading(false);
        }
    };
    fetchNotes();
}, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-blue-600 py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && !loading && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No notes found. Create your first note!</p>
          </div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="flex flex-wrap gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;