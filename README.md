
# petLove (petLo<3)

petLove is a webapp to help people connect their pets with other pets for play dates. petLove uses Ruby on Rails and PostgreSQL on the backend, and React/Redux to handle state on the frontend.

[petLove live](https://pet1ov3.herokuapp.com/#/home)

## Feature and Implementation

![screen shot 2017-11-03 at 11 13 58 am](https://user-images.githubusercontent.com/24593321/32381088-3b2e51fe-c088-11e7-829a-822170c18713.png)

### User Matching
User matching is based on how users answer a set of personality question. Users start off with a compatibility score of 50 (scale is between 1-100) and based on how they answer those question will it change their compatibility score. By using a join table, between answer_id, and user_id, we can develop a compatibility score onto the user.

```jsx
{filteredUsers.map((user) => {
  return (
    <div className="home-main-matches-thumbnail-container2" key={user.id}>
      <Link to={`profile/${user.id}`} key={user.id}>
        <div key={user.id} >
          <img
            src={user.image_url}
            className="home-main-matches-thumbnail"
            key={user.id}/>
          <div className="home-main-matches-thumbnail-username">
            {user.username}
          </div>
          <div className="home-main-matches-thumbnail-matchpercent">
            {`${91-Math.abs(user.compatibility_value-this.props.userCompatibilityValue)}% Match`}
          </div>
        </div>
      </Link>
    </div>
  )}
)}
</div>
```

![screen shot 2017-11-03 at 12 02 12 pm](https://user-images.githubusercontent.com/24593321/32383619-dc28dc36-c08e-11e7-8817-d490234ccb5e.png)

### Question/Answers
Developing the back end for how we would generate a match was a huge challenege. Originally I intended to compare arrays of user answers to another user in order to calculate a compatibility score. This was an extremely difficult task on the backend handling array of answers and creating responses. After talks with other students, I decided it would be best to approach the matching in a completely different way. What we would do is generate a compatibility score for each user. Based on that score we could more efficiently generate a compatibility score, rather then comparing each individual answer.

### Front End Search

Based on what matches returns from the user slice of state, we can do a quick search to filter users by their username on the front end.

```js
let filteredUsers = [];
if (this.props.users) {
  filteredUsers = renderUsers.filter((user)=> {
    return (user.username.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !== -1)
  })
}
```


![screen shot 2017-11-03 at 11 42 22 am](https://user-images.githubusercontent.com/24593321/32382604-16db1ffe-c08c-11e7-9d6d-a440ecb6bf97.png)

### Single Page App

petLove is a single page app using react to dynamically render the page based on what information is being request, meaning a faster and more responsive user experience.

## Future Direction of Project

In addition to the features implemented, I'd like to implement additional features.

### Backend Search
okCupid allow for users to search their database based on various user parameters (hobbies, location, likes, etc..). To do this I'd like to add to my search bar component to query the new string that is generated, and compare that to the user parameters that show matching likes and compatibility scores.

### Messaging
okCupid also allows for direct messaging between users, I'd need to develop a new slice of state to track the messaging for a user.

### Location
okCupid allows for matching based on location settings. If a user is too far, then that user will be filtered out of a match request. I'd like to implement that on my user matching and searching using the geocoder gem to generate coordinate for a users location when he submit his location to filter out additional matches.
