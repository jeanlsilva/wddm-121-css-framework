import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required()
}).required();  

function ContactForm() {
    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        alert(`Thank you, ${data.name}. We will soon reach out to you`);
        setValue('name', '');
        setValue('email', '');
        setValue('message', '');
        navigate('/wddm-121-css-framework');
    }

    return (
        <div class="relative z-2">
            <form class="flex flex-col justify-center h-[80vh]" onSubmit={handleSubmit(onSubmit)}>
                <div class="flex flex-col lg:flex-row lg:space-x-10">
                    <div class="flex flex-col flex-1 hover:text-yellow-500  mt-5 lg:mt-0">
                        <label htmlFor="name" class="text-white mb-2 peer">Full Name</label>
                        <input type="text" placeholder="Full Name" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("name")} />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div class="flex flex-col flex-1 mt-5 lg:mt-0">
                        <label htmlFor="email" class="text-white mb-2">Email</label>
                        <input type="text" placeholder="Email" class={`p-4 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.email ? 'border border-red-500' : 'border-0'}`} {...register("email")} />
                        {errors.email && (
                            <span class="text-red-500">
                                {errors.email.type === 'required' ? 'Email is required' : 'Email must be valid'}
                            </span>
                        )}
                    </div>
                </div>
                <div class="mt-10">
                    <label htmlFor="message" class="text-white">Your message</label>
                    <textarea placeholder="Your message" class={`w-full mt-5 p-4 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.message ? 'border border-red-500' : 'border-0'}`} {...register("message")}></textarea>
                    {errors.message && <span class="text-red-500">Message is required</span>}
                </div>
                <div class="flex justify-end mt-5 lg:mt-10">
                    <button type="submit" class="px-8 py-4 bg-yellow-500 rounded-lg hover:bg-black hover:text-yellow-500 transition-all ease-in-out duration-500">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;