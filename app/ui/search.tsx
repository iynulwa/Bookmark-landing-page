export default function Search() {
    return(
        <div className="md:flex md:gap-6 md:w-1/2">
            <label htmlFor="email" className="sr-only"></label>
            <input className="bg-white w-full p-4 rounded-md" id="email" type="email" name="email" placeholder="Enter your email address" required/>
            <button className="w-full bg-[var(--clr-red-400)] text-white p-4 my-2 rounded-md md:my-0 md:w-1/2">Contact Us</button>
        </div>
    )
}