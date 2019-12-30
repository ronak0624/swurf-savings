import React, {Component} from 'react'
import './style.css'

export default class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
      }
      handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }
      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }
      render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state
        return(
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
              <div className="dd-header-title">{headerTitle}
                <svg class="gi gi-arrow-down-outline fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17zm-3.91-7L12 14.82 16 10z"></path>
                    </svg>
              </div>
            </div>
            {listOpen && <ul className="dd-list">
             {list.map((item) => (
               <li className="dd-list-item" key={item.id} onClick={() => this.props.selectedItem(item.id)}>{item.title}</li>
              ))}
            </ul>}
          </div>
        )
      }
}