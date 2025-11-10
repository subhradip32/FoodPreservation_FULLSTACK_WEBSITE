import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import BackCircles from "../components/backcircles";

export default function CartPage() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		if (!userId) return;
		fetch(`http://localhost:8080/api/cart/${userId}`)
			.then(async (res) => {
				const data = await res.json();
				setItems(data);
			})
			.catch(() => setItems([]))
			.finally(() => setLoading(false));
	}, [userId]);

	function handleBuyNow() {
		if (items.length === 0) {
			alert("Your cart is empty!");
			return;
		}
		if (window.confirm("Proceed to buy? This will clear your cart.")) {
			fetch(`http://localhost:8080/api/cart/${userId}/clear`, {
				method: "DELETE"
			})
				.then(() => {
					setItems([]);
					alert("Purchase successful! Cart emptied.");
				})
				.catch(() => alert("Failed to clear cart."));
		}
	}

	if (!userId) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-grad-start">
				<Navbar />
				<BackCircles />
				<h2 className="text-2xl font-bold text-primary mb-4">Please log in to view your cart.</h2>
			</div>
		);
	}

	// Calculate total amount
	const totalAmount = items.reduce((sum, item) => sum + (item.cost == null || item.cost === "" ? 0 : Number(item.cost)), 0);

	return (
		<div className="min-h-screen bg-grad-start">
			<Navbar />
			<BackCircles />
			<div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-3xl font-bold text-primary">Your Cart</h2>
					<div className="flex items-center gap-4">
						<span className="text-xl font-bold text-primary">Total: ₹{totalAmount}</span>
						<button
							className="bg-primary text-white py-2 px-6 rounded-xl font-semibold hover:opacity-95 transition"
							onClick={handleBuyNow}
						>
							Buy Now
						</button>
					</div>
				</div>
				{loading ? (
					<p className="text-lg text-subtext">Loading...</p>
				) : items.length === 0 ? (
					<p className="text-lg text-subtext">Your cart is empty.</p>
				) : (
					<ul className="divide-y divide-accent-light">
						{items.map((item) => (
							<li key={item.id} className="py-4 flex items-center gap-6">
								<img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-xl border" />
								<div className="flex-1">
									<h3 className="text-xl font-semibold text-accent mb-1">{item.name}</h3>
									<p className="text-subtext mb-1">{item.description}</p>
									<span className="text-primary font-bold">₹{item.cost == null || item.cost === "" ? 0 : item.cost}</span>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
