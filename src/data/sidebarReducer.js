const initialState = {
  links: [
    {
      id: 1,
      text: 'Profile',
      icon: 'img/icons/icon-profile.png',
    },
    {
      id: 2,
      text: 'Messages',
      icon: 'img/icons/icon-message.png',
    },
    {
      id: 3,
      text: 'News',
      icon: 'img/icons/icon-news.png',
    },
    {
      id: 4,
      text: 'Music',
      icon: 'img/icons/icon-music.png',
    },
    {
      id: 5,
      text: 'Settings',
      icon: 'img/icons/icon-settings.png',
    },
  ],
  users: [
    { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=41' },
    { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=52' },
    { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=53' },
    { id: 4, name: 'Diana', avatar: 'https://i.pravatar.cc/150?img=34' },
    { id: 5, name: 'Eve', avatar: 'https://i.pravatar.cc/150?img=25' },
    { id: 6, name: 'Frank', avatar: 'https://i.pravatar.cc/150?img=56' },
    { id: 7, name: 'Grace', avatar: 'https://i.pravatar.cc/150?img=37' },
    { id: 8, name: 'Hank', avatar: 'https://i.pravatar.cc/150?img=58' },
    { id: 9, name: 'Ivy', avatar: 'https://i.pravatar.cc/150?img=19' },
    { id: 10, name: 'Jack', avatar: 'https://i.pravatar.cc/150?img=60' },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
