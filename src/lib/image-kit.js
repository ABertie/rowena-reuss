import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : process.env.KIT_PUBLIC_KEY,
    privateKey : process.env.KIT_PRIVATE_KEY,
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/",
});

export default imagekit