import SideBar from "../SideBar/SideBar";

import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({
  onCardClick,
  handleCardDelete,
  clothingItems,
  handleAddClick,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items"></section>
      <ClothesSection
        onCardClick={onCardClick}
        onClick={handleCardDelete}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </div>
  );
}

export default Profile;
