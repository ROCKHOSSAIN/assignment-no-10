import swal from 'sweetalert';

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const photo = form.photo.value
        const rating = form.rating.value
        const description = form.description.value

        console.log(name, brandName, type, price, photo, rating, description);
        const newCar = { name, brandName, type, price, photo, rating, description }
        fetch('https://assignment-no-10-server-three.vercel.app/allcar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You have added this Car Info!",
                        icon: "success",
                        button: "Aww yesss!",
                    });
                }
            })
    }
    return (
        <div className='py-20'>
          <div className='font-poppins flex items-center justify-center mb-4 md:mb-10'>
    <span className='border-2 border-green-400 p-2'>
        <h1 className='text-center text-lg md:text-3xl'>
            Add <span className='text-purple-500'>Car</span> Info
        </h1>
    </span>
</div>


            <div className='container mx-auto '>
                <form onSubmit={handleAddProduct}>
                    {/* {form name and quantity row} */}
                    <div className='md:flex gap-10 mb-5'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Enter Car name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <div className="select">
                                <select
                                    name="brandName"
                                    className=" select-bordered w-full"
                                >
                                    <option value="">Select Brand</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="BMW">BMW</option>
                                    <option value="MercedesBenz">Mercedes-Benz</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="RollsRoyce">Rolls-Royce</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    {/* {form supplier test row} */}
                    <div className='md:flex gap-10 mb-5'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="type" placeholder="Enter Category name Ex:Car" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="price" placeholder="Car Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* {form supplier test row} */}
                    <div className='md:flex gap-10 mb-5'>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="https://photo" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Enter Rating (1-5)</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Enter a number between 1 and 5"
                                    className="input input-bordered w-full"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    {/* {form desc} */}
                    <div className='mb-10'>

                        <div className='md:flex gap-10 mb-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="input-group">
                                    <textarea
                                        name="description"
                                        placeholder="Enter Description"
                                        className="textarea textarea-bordered w-full"


                                    ></textarea>
                                </label>
                            </div>
                        </div>


                    </div>
                    <input type="submit" value="Add Product" className='btn btn-block bg-[#6552bd] hover:bg-[#6552bd] font-rancho text-2xl text-white' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;