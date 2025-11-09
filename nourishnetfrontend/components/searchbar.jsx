
import { useState } from 'react';

function CreatePostDialog({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        quantity:'', 
        cost: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white border border-accent   rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Create New Food Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 border rounded"
                            rows="3"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="imageUrl"
                            className="w-full p-2 border rounded"
                            value={formData.imageUrl}
                            onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                            placeholder="Enter image URL"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2 mb-4">
                        <input
                            type="number"
                            id="quantity"
                            className='w-full border rounded p-2'
                            value={formData.quantity}
                            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                            placeholder='Quantity'
                            required
                        />
                        <input
                            type="number"
                            id="cost"
                            className="w-full p-2 border rounded"
                            value={formData.cost}
                            onChange={(e) => setFormData({...formData, cost: e.target.value})}
                            placeholder="Cost of the product"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded hover:bg-accent"
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function SearchBar() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleCreatePost = (formData) => {
        // API call - send JSON to backend
        (async () => {
            console.log("Creating post with data:", formData);
            try {
                const res = await fetch('http://localhost:8080/api/food_post', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (!res.ok) {
                    const text = await res.text().catch(() => null);
                    console.error('Failed to create post', res.status, text);
                    return;
                }

                console.log('Post created successfully');
                // Optional: trigger a refresh of posts or show a success message here
            } catch (err) {
                console.error('Network error creating post:', err);
            }
        })();


    };
    return(
        <>
        {/* Centered Search Bar with Button */}
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="flex w-full max-w-lg items-center border-2 border-primary rounded-full overflow-hidden focus-within:border-accent  focus-within:ring-accent transition-all duration-200">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for food"
            className="grow px-4 py-2 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>
        <button 
            className="bg-primary p-2 m-2 rounded-full text-white hover:bg-accent" 
            onClick={() => setIsDialogOpen(true)}
        >
            create
        </button>
      </div>
      <CreatePostDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleCreatePost}
      />
        </>
    );
}