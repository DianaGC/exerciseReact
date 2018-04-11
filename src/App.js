import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Avatar from './Avatar';
const user={
    name:Diana,
    img: 'https://www.google.com.ec/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTQzMzAxMjk3OTQ3Mjg5MTYw%2Fdiana_gettyimages-515185764jpg.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fpeople%2Fprincess-diana-9273782&docid=Slf6UTl53wtXdM&tbnid=bs2zje9YaeRa_M%3A&vet=10ahUKEwjm5Z_HnrHaAhWB7lMKHdBEDtsQMwg3KAgwCA..i&w=1200&h=1200&bih=608&biw=1164&q=diana&ved=0ahUKEwjm5Z_HnrHaAhWB7lMKHdBEDtsQMwg3KAgwCA&iact=mrc&uact=8'
}

class App extends React.Component{
  render(){
    return <div> <Avatar user ={user}/> </div>;
  }
}
export default App;