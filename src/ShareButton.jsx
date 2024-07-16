const ShareButton = ({ guesses }) => {

    const iconMap = {
        correct: "🟩",
        wrongPosition: "🟧",
        incorrect: "⬜",
    };

    const message = guesses.map((row) =>
        row.map(guess => iconMap[guess.status]).join(''))
        .join('\n');

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Melodle ${new Date().toLocaleString()}`,
                    text: message + "\n" + `Play at https://melodle.netlify.app`,
                    url: window.location.href,
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            console.error('Web Share API is not supported in your browser.');
        }
    };

    return (
        <button id="share-button" className="btn-icon" onClick={handleShare}>
            <svg height="80" viewBox="0 0 100 100">
                <path fill="orange"
                    d="M22.5,65c4.043,0,7.706-1.607,10.403-4.208l29.722,14.861C62.551,76.259,62.5,76.873,62.5,77.5c0,8.284,6.716,15,15,15   s15-6.716,15-15c0-8.284-6.716-15-15-15c-4.043,0-7.706,1.608-10.403,4.209L37.375,51.847C37.449,51.241,37.5,50.627,37.5,50   c0-0.627-0.051-1.241-0.125-1.847l29.722-14.861c2.698,2.601,6.36,4.209,10.403,4.209c8.284,0,15-6.716,15-15   c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,0.627,0.051,1.241,0.125,1.848L32.903,39.208C30.206,36.607,26.543,35,22.5,35   c-8.284,0-15,6.716-15,15C7.5,58.284,14.216,65,22.5,65z" />
            </svg>
        </button>
    );
};

export default ShareButton;
