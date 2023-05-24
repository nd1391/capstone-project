import * as outfitsApi from '../../utilities/outfits-api'


export default function EditOutfitPage() {

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            Event: <input type="text" name="event" onChange={handleChange} value={formData.event}/>
            <br />
            Top: <input type="text" name="top" onChange={handleChange} value={formData.top}/>
            <br />
            Top color: <input type="text" name="topColor" onChange={handleChange} value={formData.topColor} />
            <br />
            Bottom: <input type="text" name="bottom" onChange={handleChange} value={formData.bottom}/> 
            <br />
            Bottom Color: <input type="text" name="bottomColor" onChange={handleChange} value={formData.bottomColor}/> 
            <br />
            Footwear: <input type="text" name="feet" onChange={handleChange} value={formData.feet}/>
            <br />
            Footwear Color: <input type="text" name="feetColor" onChange={handleChange} value={formData.feetColor}/>
            <br />
            Description: <input type="text" name="description" onChange={handleChange} value={formData.description}/>
            <br />
            <input type="submit" value="Submit" />       
          </form>
        </div>
    )
}