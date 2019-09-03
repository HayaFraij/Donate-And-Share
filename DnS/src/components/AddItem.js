import React, { Component } from 'react';
import axios from 'axios';
 let END_POINT="http://localhost:9000"
  class AddItem extends Component{
  state ={
    user:{},
    item :{
      itemName :"",
      itemDescription :"",
      category :"",
      type :"",
      location:"",
      locationDescription:"",
      phone:0,
      // isAvalible:false,
        //  image :""
    }
  }
  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({item:{...this.state.item, [e.target.name]: e.target.value }})
    console.log(this.state)
  };

  componentDidMount() {
    this.setState({user:this.props.user})
  }


  additem= () => {
    console.log('this.state.user', this.state.user)
    let newUserItem=this.state.user
    newUserItem.items.push(this.state.item)

    // this.setState({user:newUserItem})
    //  let newitem=this.state.item
    
    console.log("helo",newUserItem)
    axios.put(`${END_POINT}/addItem/users`, newUserItem)
      .then(res => {
        console.log("helo",res)
  
        this.setState({ item: res.data});
        console.log(res.data)
        newUserItem=null
      })
      .catch(err => {
        console.log(err);
      })
  };
  // updateitem= (id,newitem) => {
  //   console.log("helo",newitem)
  //   axios.put(`http://localhost:9000/users/${id}`, newitem)
  //     .then(res => {
  //       console.log("helo",res)
  
  //       this.setState({ items: res.data});
  //       console.log(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // };

 


 
  render(){
    const { itemName ,category,itemDescription,type,location,locationDescription,phone,isAvalible} = this.state.item
     const {  onChange,cheked } = this  
     
     
     return(
     <div>
   
          <form>
              <div >
  <div className="form-row">
    <div className="form-group col-md-6">
   
      <label >Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Name Item" name ='itemName'  onChange={onChange}></input>
    </div>
    <div class="form-group col-md-6">
   
   <label >phone</label>
   <input type="text" className="form-control" id="inputEmail4" placeholder="number"  name='phone' onChange={onChange}></input>
 </div>
 <div className="form-group col-md-6">
   
   <label >category</label>
   {/* <input type="text" class="form-control" id="inputEmail4" placeholder=""  name='phone' value={itemName}  onChange={onChange}></input> */}
   <select id="inputState" className="form-control" name='category'  onChange={onChange}>
        <option selected>Choose...</option>
                    <option >books</option>
                     <option>elec</option>
                      <option >..</option>
      </select>
 </div>
  </div>
  <div class="form-group">
    <label >Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='locationDescription' onChange={onChange}/>
    <select name='location'  onChange={onChange}>
        
        <option >Amman</option>
        <option>Madaba</option>
         <option >Irbd</option>
         <option >Zarqa</option>
        <option>Ma`an</option>
         <option >Salt</option>
         <option >Mafraq</option>
        <option>Ajlon</option>
         <option >Aqaba</option>
        </select>
  </div>
  <div class="form-group">
    <label>Item Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='itemDescription' onChange={onChange}></textarea>
  </div>
  <div class="form-row">
    
    <div className="form-group col-md-4">
      <label>State</label>
      <select id="inputState" className="form-control" name='type'  value={type} onChange={onChange}>
        <option selected>Choose...</option>
                    <option >reuse</option>
                     <option>free</option>
                      <option >trade</option>
      </select>
    </div>
    
   
  </div>
  <div class="form-group">
    <div class="form-check">
      {/* <input class="form-check-input" type="checkbox" id="gridCheck" name=' isAvalible'  value={isAvalible}  onChange={cheked} /> */}
      <label className="form-check-label" for="gridCheck">
       isAvalible
      </label>
    </div>
    </div>
 
  <button type="submit" class="btn btn-primary" onClick={this.additem} >create</button>

</div>
         
          
 </form>
      


         </div>
      )
    }}
    export default AddItem;

















      