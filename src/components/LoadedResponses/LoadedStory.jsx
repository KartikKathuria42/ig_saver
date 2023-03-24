const LoadedStory = (props) => {
    const responseObj = props.responseObj;

    // If no such account found
    if (responseObj.message) {
        return (
            <div className="error-page">
                <h1>No such account found !</h1>
                <p>{responseObj.message}</p>
            </div>
        );
    }
    const storyArray = responseObj.story.data;

    // If account exists but no story uploaded
    if (!storyArray.length) {
        return (
            <>
                <header className="user-info">
                    <img
                        src={responseObj.profile_pic_url}
                        className="profile-picture"
                        alt="Profile"
                    />
                    <div className="right-section">
                        <h3>{responseObj.username}</h3>
                        <p>{responseObj.full_name}</p>
                    </div>
                </header>
                <div className="error-page">
                    <h1>No story found !</h1>
                    <p>User has not uploaded any story !</p>
                </div>
            </>
        );
    }

    // When User found and story is uploaded
    console.log(responseObj);
    return (
        <>
            <header className="user-info">
                {/* <img
                    src={responseObj.profile_pic_url}
                    className="profile-picture"
                    alt="Profile"
                /> */}
                <div className="right-section">
                    <h3>{responseObj.username}</h3>
                    <p>{responseObj.full_name}</p>
                </div>
            </header>
            <section className="story-list">
                {storyArray.map((element, index) => {
                    if (element.media_type === 2) {
                        return (
                            <div className="video_component">
                                <video className="story-item" key={index} controls>

                                    <source
                                        src={element.video_versions[0].url}
                                        className="story-media"
                                        type="video/webm"
                                    ></source>


                                </video>
                                <a  className = "download_btn" href={element.video_versions[0].url_original} download target="_blank">
                                    Download
                                </a>
                            </div>

                        );
                    } else {
                        return (
                            <div className="story-item" key={index}>
                                <a download="custom-filename" href={element.image_versions2.candidates[0]
                                    .url_original} title="ImageName">
                                    <img
                                        src={
                                            element.image_versions2.candidates[0]
                                                .url
                                        }
                                        className="story-media"
                                        alt=""

                                    />
                                </a>


                            </div>
                        );
                    }
                })}
            </section>
        </>
    );
};

export default LoadedStory;
