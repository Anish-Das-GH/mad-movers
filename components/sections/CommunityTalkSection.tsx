'use client';

import React, { useState } from 'react';
import { COMMUNITY_POSTS, CommunityPost } from '@/data/danceData';
import { MessageSquare, Heart, MessageCircle, Send, Sparkles, User } from 'lucide-react';

export function CommunityTalkSection() {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [activeTag, setActiveTag] = useState('All');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedTag, setSelectedTag] = useState('Hip-Hop');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const tags = ['All', 'Hip-Hop', 'Contemporary', 'Workshops', 'Fitness & Yoga', 'Kathak', 'General'];

  const filteredPosts = activeTag === 'All'
    ? posts
    : posts.filter((p) => p.tag.toLowerCase().includes(activeTag.toLowerCase()));

  const handleToggleLike = (id: string) => {
    const isLiked = likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: !isLiked }));
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 } : p))
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: CommunityPost = {
      id: `cp-${Date.now()}`,
      author: authorName.trim() || 'Fellow Mover',
      avatarSeed: authorName.toLowerCase().replace(/\s+/g, '') || 'dancer',
      tag: selectedTag,
      branch: 'Salt Lake / Online',
      timeAgo: 'Just now',
      title: newTitle.trim(),
      content: newContent.trim(),
      likes: 1,
      replies: 0,
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setAuthorName('');
    setShowNewPostForm(false);
  };

  return (
    <section id="community" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>The Cypher Lounge</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Mad Movers <span className="text-amber-400">Community Talk</span>
          </h2>
          <p className="text-sm text-purple-200/80 max-w-xl">
            Ask questions about choreography drills, connect with practice partners, get instructor tips, and share your breakthroughs.
          </p>
        </div>

        <button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="py-3 px-5 rounded-xl bg-purple-900/80 hover:bg-purple-800 border border-purple-700 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{showNewPostForm ? 'Close Question Form' : 'Start a Discussion'}</span>
        </button>
      </div>

      {/* New Post Form Drawer */}
      {showNewPostForm && (
        <form
          onSubmit={handleCreatePost}
          className="mb-10 p-6 rounded-3xl bg-[#160621] border border-amber-400/40 shadow-2xl space-y-4 animate-fade-in"
        >
          <div className="flex items-center justify-between pb-2 border-b border-purple-900">
            <h3 className="text-base font-bold text-white">Ask the Mad Movers Community</h3>
            <span className="text-[11px] text-amber-400">Our instructors reply daily</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-purple-300 block mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Debabrata Roy"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-purple-300 block mb-1">Topic Tag</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                <option value="Hip-Hop">Hip-Hop & Urban</option>
                <option value="Contemporary">Contemporary & Floorwork</option>
                <option value="Kathak">Kathak & Classical</option>
                <option value="Workshops">Workshops & Masterclasses</option>
                <option value="Fitness & Yoga">Fitness & Yoga</option>
                <option value="General">General Question</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-purple-300 block mb-1">Question Title</label>
            <input
              type="text"
              required
              placeholder="e.g. How to prevent wrist soreness during breakdance freezes?"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-purple-300 block mb-1">Details</label>
            <textarea
              required
              rows={3}
              placeholder="Provide context so teachers or fellow dancers can share advice..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowNewPostForm(false)}
              className="px-4 py-2 rounded-xl bg-purple-950 text-purple-300 text-xs font-semibold hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Question</span>
            </button>
          </div>
        </form>
      )}

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTag === tag
                ? 'bg-amber-400 text-purple-950 font-bold shadow'
                : 'bg-purple-950/40 text-purple-300 hover:text-white border border-purple-900/60'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => {
          const isLiked = likedPosts[post.id];
          return (
            <div
              key={post.id}
              className="p-5 rounded-3xl bg-[#14061d] border border-purple-900/60 hover:border-purple-700/70 transition-all space-y-3 shadow-lg"
            >
              {/* Author & Tag strip */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-800 to-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{post.author}</span>
                    <span className="text-[10px] text-purple-400/80">
                      {post.branch} · {post.timeAgo}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-900/60 text-amber-300 border border-purple-800">
                  {post.tag}
                </span>
              </div>

              {/* Title & Content */}
              <div>
                <h3 className="text-sm font-extrabold text-white mb-1">{post.title}</h3>
                <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
                  {post.content}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-950 text-xs text-purple-300">
                <button
                  type="button"
                  onClick={() => handleToggleLike(post.id)}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isLiked ? 'text-rose-400 font-bold' : 'hover:text-amber-400'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span className="font-mono text-[11px]">{post.likes}</span>
                </button>

                <div className="flex items-center gap-1.5 text-purple-300/80">
                  <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span className="font-mono text-[11px]">{post.replies} Replies</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
