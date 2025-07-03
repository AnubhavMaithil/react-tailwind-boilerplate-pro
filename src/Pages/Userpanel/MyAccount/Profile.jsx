import React, { useEffect, useState } from 'react';
import SelectInput from '../../../Components/SelectInput';
import InputField from '../../../Components/InputField';
import BackButton from '../../../Components/BackButton';
import { useSelector } from 'react-redux';
import Loader from '../../../Components/Loader';

const Profile = () => {
    const user = useSelector((state) => state.auth?.user);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        date: '',
        status: false,
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user?.username || '',
                mobile: user?.mobile || '',
                email: user?.email || '',
                date: user?.createdAt?.split('T')[0] || '',
                status: user?.isActive ?? false,
            });
            setLoading(false);
        }
    }, [user]);

    const fields = [
        { label: "Name*", name: "name" },
        { label: "Mobile*", name: "mobile", type: "number" },
        { label: "Email*", name: "email", type: "email" },
        { label: "Joining Date*", name: "date", type: "date" },
        {
            label: 'Status*',
            name: 'status',
            type: 'select',
            options: [
                { label: 'Active', value: true },
                { label: 'Inactive', value: false },
            ],
        },
    ];

    const renderField = (field) => {
        const value = formData[field.name];

        const handleChange = (e) => {
            const newValue = field.type === 'select' ? e : e.target.value;
            setFormData((prev) => ({
                ...prev,
                [field.name]: newValue,
            }));
        };

        if (field.type === 'select') {
            return (
                <div key={field.name}>
                    <SelectInput
                        disabled
                        label={field.label}
                        name={field.name}
                        options={field.options}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            );
        }

        return (
            <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type || 'text'}
                value={value}
                onChange={handleChange}
            />
        );
    };

    return (
        <div>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <BackButton />
                    <h1 className="text-lg font-medium">Profile</h1>
                </div>

                <section className="relative">
                    <div className="w-full bg-[#ffffff13] backdrop-blur-md shadow-md rounded-xl p-4 flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {fields.map(renderField)}
                        </div>
                    </div>
                </section>

            </div>
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default Profile;
