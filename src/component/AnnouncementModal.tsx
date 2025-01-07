import React from 'react';
import { Announcement } from '../constant/type';

interface AnnouncementModalProps {
    announcement: Announcement;
    onClose: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ announcement, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-[80%] w-[80%] mx-auto relative min-h-[50vh] max-h-[90vh] overflow-y-auto">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{announcement.title}</h2>
                <div className="flex items-center text-base text-gray-500 mb-6">
                    <span className="mr-4">By {announcement.author}</span>
                    <div className="h-4 w-[1px] bg-gray-300 mx-4"></div>
                    <span>{new Date(announcement.startDate).toLocaleDateString()}</span>
                </div>

                {announcement.image?.s3Url && (
                    <div className="flex justify-center mb-4">
                        <img 
                            src={announcement.image.s3Url} 
                            alt={announcement.title}
                            className="w-[70%] h-auto max-h-[500px] object-contain rounded-lg"
                        />
                    </div>
                )}
                
                <div className="prose max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed">{announcement.body}</p>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementModal;