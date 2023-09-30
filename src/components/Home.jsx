const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">API call with Axios in React JS</h1>
      <p>
        This is a simple React App. This app is created from scratch. Other than
        axios and react router dom, there are no plugins. Bootstrap cdn is used
        for css. This has full functionalities of a Create, Read, Update and
        Delete (CRUD) application in react js. After reviewing several google
        articles and youtube video tutorials, I came to the conclusion that no
        one is fully explaining all elements of CRUD in one piece. Some have
        create and delete functions but not edit and update functions. Those
        with edit and update functions, many of the times it is not functioning
        either giving duplicate keys giving erroneous results or affecting other
        parts such as delete functions. To tackle this lacunae, I attempted to
        create a simple CRUD application in react js. It is a single page with
        all 4 functionalities in one page. It is fully functional and has been
        logically flowing. I am able to create this with a mind to help the
        beginners to learn the basics of react js. This app uses axios to fetch
        data from a fake api. For learning and tutorial purposes, these fake
        apis are a great resource.
        <hr />
        <img src="https://source.unsplash.com/650x650/?nature" alt="photo" />
      </p>
    </div>
  );
};
export default Home;
