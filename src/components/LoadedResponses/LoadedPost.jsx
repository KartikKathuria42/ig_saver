const LoadedPost = (props) => {
    let responseObj = props.responseObj;

    // If no post found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No post found !</h1>
                <p>Make sure you've entered proper link.</p>
            </div>
        );
    }
    responseObj = responseObj.items[0];

    return (
        <>
            <header className="reel-header">
                <div className="reel-creator">
                    <img
                        src={responseObj.user.profile_pic_url}
                        className="profile-picture"
                        alt="profile"
                    />
                    <div className="creator-info">
                        <h3>{responseObj.user.username}</h3>
                        <p>{responseObj.user.full_name}</p>
                    </div>
                </div>
                <a
                    href={`https://instagram.com/${responseObj.user.username}`}
                    className="instagram-anchor"
                >
                    Visit Instagram
                </a>
            </header>

            <article className="post-section">
                {responseObj.media_type === 2 && (
                    <div className="video_component">
                        <video className="post-media" controls>
                            <source
                                src={responseObj.video_versions[0].url}
                                type="video/webm"
                            ></source>
                        </video>
                        <a className="download_btn" href={responseObj.video_versions[0].url_original} download target="_blank">
                            Download
                        </a>
                    </div>
                )}
                {(responseObj.media_type === 1 || responseObj.media_type === 8) && (
                    <a href={responseObj.image_versions2.candidates.at(-1).url_original}>
                        <img
                            src={responseObj.image_versions2.candidates.at(-1).url}
                            className="post-media"
                            alt="post media"
                        />
                    </a>

                )}
            </article>
            <p className="post-caption">{responseObj.caption.text}</p>
        </>
    );
};

export default LoadedPost;
