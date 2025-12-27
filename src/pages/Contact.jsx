export default function Contact() {
return (
<main className="pt-32 max-w-4xl mx-auto px-4">
<h1 className="text-3xl font-bold">Contact Us</h1>
<form className="mt-8 grid gap-4">
<input className="border p-3 rounded" placeholder="Name" />
<input className="border p-3 rounded" placeholder="Email" />
<textarea className="border p-3 rounded" rows="5" placeholder="Your message" />
<button className="bg-gold text-white py-3 rounded">Send Message</button>
</form>
</main>
);
}