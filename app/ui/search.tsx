export default function Search() {
    return(
        <div className="mt-6">
            <label htmlFor="email" className="sr-only"></label>
            <input className="bg-white w-full p-4 rounded-md" id="email" type="email" name="email" placeholder="Enter your email address" required/>
            <button className="w-full bg-red-500 text-white p-4 my-2 rounded-md">Contact Us</button>
        </div>
    )
}