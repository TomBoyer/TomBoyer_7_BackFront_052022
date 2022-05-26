const LogOutIcon = () => {
  return (
    <svg className='logout-icon' width="1em" height="1em" viewBox="0 0 24 24"><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4l5-4v3z" fill="currentColor"></path></svg>
  );
};

// const MessageIcon = () => {
//   return (
//     <svg className='feed-icon' width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 20H7a2 2 0 0 1-2-2V8.94l-2.77-3.3C2.09 5.47 2 5.24 2 5a1 1 0 0 1 1-1h17a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5z" fill="currentColor"></path></svg>
//   );
// };

// const LikeIcon = ({ hasLiked }) => {
//   return (
//     <svg className={hasLiked() ? 'like-icon liked' : 'like-icon neutral'} width="1em" height="1em" viewBox="0 0 48 48"><path d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"></path></svg>
//   );
// };

// const DislikeIcon = ({ hasDisliked }) => {
//   return (
//     <svg className={hasDisliked() ? 'dislike-icon disliked' : 'dislike-icon neutral'} width="1.13em" height="1em" viewBox="0 0 27 24"><path d="M10.355 23.783a3.262 3.262 0 0 1-.506-.299l.01.007l-.106-.071a1.018 1.018 0 0 1-.501-.599l-.002-.007a116.75 116.75 0 0 1-.518-1.964l-.066-.259a7.842 7.842 0 0 1-.244-1.171l-.005-.043c.172-1.574.501-3.011.976-4.378l-.042.138l-7.692.012h-.027A1.644 1.644 0 0 1 0 13.303l-.001.008a1.983 1.983 0 0 1 .897-1.785l.008-.005a2.178 2.178 0 0 1-.371-1.401v.007a1.846 1.846 0 0 1 1.135-1.871l.012-.004a2.385 2.385 0 0 1-.298-1.311v.006a1.905 1.905 0 0 1 .885-1.735l.008-.005a2.782 2.782 0 0 1-.224-1.462l-.001.013v-.185a1.834 1.834 0 0 1 2.007-1.719l-.007-.001h10.373c.051 0 .105 0 .16-.007a2.9 2.9 0 0 1 .214-.01h.016c.104 0 .204.014.299.04l-.008-.002c.186.063.348.147.493.253l-.005-.004l.1.063c.234.144.462.298.69.451l.102.072c.131.094.194.136.262.133c.24-.005.48-.007.72-.01v9.155l.013.769c-.451.288-.867.56-.993.664a7.407 7.407 0 0 1-.523.901l.017-.026c-.085.134-.17.265-.248.4l-1.729 2.89c-.08.136-.167.271-.254.407c-.164.26-.329.52-.465.79a.883.883 0 0 0-.079.521l-.001-.005l.006 3.12a1.525 1.525 0 0 1-.679 1.074l-.006.004a1.97 1.97 0 0 1-1.155.499h-.093a2.135 2.135 0 0 1-.931-.222l.012.006zm7.76-10.757V0h7.016c.17 0 .31.13.326.295v.001l1.218 12.368l.002.032a.329.329 0 0 1-.329.329zm3.624-1.76c0 .181.147.328.328.328h2.511a.329.329 0 1 0 0-.658h-2.51a.327.327 0 0 0-.328.327zm-1.873 0c0 .181.147.328.328.328h.774a.329.329 0 1 0 0-.658h-.774a.327.327 0 0 0-.327.327zm-.694-8a1.3 1.3 0 1 0 2.596.002a1.3 1.3 0 0 0-2.595-.003zm.657 0a.64.64 0 1 1 1.28.001a.64.64 0 0 1-1.279-.001v-.001z" fill="currentColor"></path></svg>
//   );
// };

// const HomeIcon = () => {
//   return (
//     <svg width="1em" height="1em" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21l-8 6.21V6.694l8-6.21l8 6.21zM14 9v6h-4v-4H6v4H2V9l6-4.5z" fill="currentColor"></path></svg>
//   );
// };

// const DeleteIcon = () => {
//   return (
//     <svg className='del-svg' width="1em" height="1em" viewBox="0 0 28 28"><path d="M19.5 16a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zM14 2a4 4 0 0 1 3.995 3.8L18 6h5a1 1 0 0 1 .117 1.993L23 8h-.849l-.594 7.332a6.5 6.5 0 0 0-6.746 10.669L10.766 26a3.75 3.75 0 0 1-3.738-3.447L5.848 8H5a1 1 0 0 1-.993-.883L4 7a1 1 0 0 1 .883-.993L5 6h5a4 4 0 0 1 4-4zm3.73 17.024l-.068-.058a.5.5 0 0 0-.569 0l-.07.058l-.057.07a.5.5 0 0 0 0 .568l.058.07l1.77 1.769l-1.768 1.766l-.057.07a.5.5 0 0 0 0 .568l.057.07l.07.057a.5.5 0 0 0 .568 0l.07-.057l1.766-1.767l1.77 1.769l.069.058a.5.5 0 0 0 .568 0l.07-.058l.057-.07a.5.5 0 0 0 0-.568l-.057-.07l-1.77-1.768l1.772-1.77l.058-.069a.5.5 0 0 0 0-.569l-.058-.069l-.069-.058a.5.5 0 0 0-.569 0l-.069.058l-1.772 1.77l-1.77-1.77l-.068-.058l.069.058zM14 4a2 2 0 0 0-1.995 1.85L12 6h4l-.005-.15A2 2 0 0 0 14 4z" fill="currentColor" fillRule="nonzero"></path></svg>
//   );
// };

// const EditIcon = () => {
//   return (
//     <svg className='edit-svg' width="1em" height="1em" viewBox="0 0 24 24"><path d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3H5m12.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38l-2.5-2.5z" fill="currentColor"></path></svg>
//   );
// };

const ShowInput = () => {
  return (
    <svg width="1em" className="showInput" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
      ></path>
    </svg>
  );
};

const HideInput = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 7c2.76 0 5 2.24 5 5c0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28l.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22L21 20.73L3.27 3L2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65c0 1.66 1.34 3 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53c-2.76 0-5-2.24-5-5c0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15l.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
      ></path>
    </svg>
  );
};

// const UpArrow = () => {
//   return (
//     <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m5-8l-5-5l-5 5h10Z"></path></svg>
//   );
// };

// const ModerationPanel = () => {
//   return (
//     <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08Z"></path></svg>
//   );
// };

export {
  /*MessageIcon, LikeIcon, DislikeIcon, HomeIcon, DeleteIcon, EditIcon,  UpArrow, ModerationPanel */ ShowInput,
  HideInput,  LogOutIcon
};