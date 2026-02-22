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
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
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
                alert('Message sent successfully!');
                reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

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
