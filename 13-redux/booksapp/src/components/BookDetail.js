import React from 'react'
import { Grid, Image, Rating, Header, List} from 'semantic-ui-react'



class BookDetail extends React.Component {
    
  render() {
    const { thumbnail, title, description } = this.props
    return (
      
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={2}>
            <Image src={thumbnail}/>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header size="medium">{title}</Header>
            <p>{description}</p>

          </Grid.Column>


        </Grid.Row>
      </Grid>

    )
  }
}
export default BookDetail
