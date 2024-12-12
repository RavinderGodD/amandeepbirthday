// Select the download button
const downloadBtn = document.getElementById('download-btn');

// Add click event listener
downloadBtn.addEventListener('click', () => {
    const videoUrl = 'https://mega.nz/file/1thwEYrA#WSjtnbxP6XGT4ApRk6jv-L3lGhWRmAQ9AkSE2BVYEWY'; // Replace with your video URL
    const anchor = document.createElement('a');
    anchor.href = videoUrl;
    anchor.download = 'video.mp4'; // Default filename
    anchor.click();
});
