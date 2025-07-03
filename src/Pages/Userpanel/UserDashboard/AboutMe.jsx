import Swal from "sweetalert2";


const AboutMe = ({ user }) => {
    const location = window.location.origin;
    const referCode = `${location}/register?referral=${user?.referralLink}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(referCode)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copied!',
                    text: 'Referral link copied to clipboard!',
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                });
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while copying!',
                });
            });
    };
    return (
        <div className="flex flex-col lg:flex-row gap-4 rounded-lg text-white">
            <div className="flex-1 bg-[#ffffff13] flex flex-col justify-between backdrop-blur-md  p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold">About Me</h2>
                <div className="space-y-2 text-sm">
                    <p><strong>User Id:</strong>{user?._id}</p>
                    <p><strong>Date Of Activation:</strong> {user?.activeDate}</p>
                    <p><strong>Created At:</strong> {new Date(user?.createdAt).toDateString()}</p>
                    <p><strong>Level:</strong> Beginner</p>
                    <p><strong>Renewal Status:</strong> {user?.isActive ? "Active" : "Inactive"}</p>
                </div>

                <div className="">
                    <h3 className="font-semibold mb-2">Your Refer Code</h3>
                    <div className="flex items-center bg-text-white/10 rounded-lg p-2">
                        <input
                            type="text"
                            readOnly
                            className="bg-transparent text-white w-full outline-none"
                            value={referCode}
                        />
                        <button onClick={handleCopy} className="ml-2 copybtn bg-bg-color/80 hover:bg-bg-color p-2 rounded">
                            📋
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
