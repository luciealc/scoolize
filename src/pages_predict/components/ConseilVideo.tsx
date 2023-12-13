import React from 'react';

export interface IConseilVideoPageProps {
    videoUrls: string[];
};

const ConseilVideoPage: React.FunctionComponent<IConseilVideoPageProps> = ({ videoUrls }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Conseils vidéo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {videoUrls.map((url, index) => (
                    <div key={index} className="mb-4 space-y-2">
                        <iframe 
                            className="w-full aspect-video"
                            src={url}
                            title={`YouTube video player ${index}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConseilVideoPage;
