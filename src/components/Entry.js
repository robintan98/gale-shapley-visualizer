import React from 'react';
import '../css/Entry.css';

function Entry(props) {

    const preferenceElems = [];
    var i;
    for (i = 1; i <= props.numPeople; i++) {
        if (props.isLeft) {
            preferenceElems.push(<div className="LeftPreference">
                                     <input type="text" class="PreferenceInput"
                                        maxlength="6" required placeholder={"Pref " + i}></input>
                                 </div>);
        } else {
            preferenceElems.push(<div className="RightPreference">
                                     <input type="text" class="PreferenceInput" 
                                        maxlength="6" required placeholder={"Pref " + i}></input>
                                 </div>);
        }
    }

    const handleChange = (e) => {
        const key = e.target.value;
        props.setInputState(state => ({
            ...state,
            ["hi"]: key,
        }))
    };

    if (props.isLeft) {
        return (
            <React.Fragment>
                <div className="LeftEntryArea">
                    <div className="PreferenceArea">
                        {preferenceElems}
                    </div>
                    <div className="LeftPerson">
                        <input type="text" class="PersonInput" maxlength="6" required placeholder={"Man " + props.count} onChange={e => handleChange(e)}></input>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="RightEntryArea">
                    <div className="RightPerson">
                        <input type="text" class="PersonInput" maxlength="6" required placeholder={"Lady " + props.count}></input>
                    </div>
                    <div className="PreferenceArea">
                        {preferenceElems}
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}

export default Entry;