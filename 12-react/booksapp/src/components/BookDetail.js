import React from 'react'
import { Grid, Image, Rating, Header, List} from 'semantic-ui-react'



class BookDetail extends React.Component {



  render() {

    const { authors, categories, description, pageCount, publisher, publishedDate, title, imageLinks, industryIdentifiers, averageRating } = this.props.volumeInfo   

    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={2}>
            <Image src={imageLinks.thumbnail}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header size="large">{title}</Header>
            <p>{description}</p>
            <p>{publishedDate}</p>
            <p>{pageCount} pages</p>
            {averageRating ? <Rating maxRating={5} defaultRating={averageRating} icon='star' size='massive' /> : null}
            <Header size='small'>Categories</Header>
            <List>
            { categories.map((cat, index) => <List.Item key={index}>{cat}</List.Item>)}
            </List>

          </Grid.Column>


        </Grid.Row>
      </Grid>

    )
  }
}
export default BookDetail
