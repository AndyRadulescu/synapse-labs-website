'use client';

import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters long'}),
    email: z.email({message: 'Please enter a valid email address'}),
    message: z.string().min(10, {message: 'Message must be at least 10 characters long'}).max(500, {message: 'Message must be less than 500 characters long'}),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function EmailForm() {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-gray-50 border-2 border-black/5 p-12 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-lg opacity-60">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                <input
                    {...register('name')}
                    type="text"
                    className={`w-full border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} py-4 focus:border-black outline-none transition-colors`}
                    placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                <input
                    {...register('email')}
                    type="email"
                    className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} py-4 focus:border-black outline-none transition-colors`}
                    placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                    {...register('message')}
                    className={`w-full border-b-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} py-4 focus:border-black outline-none transition-colors min-h-[150px]`}
                    placeholder="Tell us about your project"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-fit bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors uppercase tracking-widest text-sm disabled:bg-gray-400"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
