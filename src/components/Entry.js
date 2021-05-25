import React from 'react';
import '../css/Entry.css';

function Entry(props) {

    const preferenceElems = [];
    for (var i = 1; i <= props.numPeople; i++) {
        if (props.isLeft) {
            var inputId = "M" + props.count + "-P" + i;
            preferenceElems.push(<div className="LeftPreference">
                                     <input type="text" class="PreferenceInput"
                                         maxlength="6" id={inputId} required placeholder={"Pref " + i}
                                         onInput={e => handleChange(e)}>
                                     </input>
                                 </div>);
        } else {
            var inputId = "W" + props.count + "-P" + i;
            preferenceElems.push(<div className="RightPreference">
                                     <input type="text" class="PreferenceInput" 
                                         maxlength="6" id={inputId} required placeholder={"Pref " + i}
                                         onInput={e => handleChange(e)}>
                                     </input>
                                 </div>);
        }
    }

    const handleChange = (e) => {
        var key = e.target.id;
        var value = e.target.value.trim();
        props.setInputState(state => ({
            ...state,
            [key]: value,
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
                        <input type="text" class="PersonInput" maxlength="6" id={"M" + props.count} required 
                            placeholder={"Man " + props.count} onInput={e => handleChange(e)}></input>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="RightEntryArea">
                    <div className="RightPerson">
                        <input type="text" class="PersonInput" maxlength="6" id={"W" + props.count} required 
                            placeholder={"Lady " + props.count} onInput={e => handleChange(e)}></input>
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