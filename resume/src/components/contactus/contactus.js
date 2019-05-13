import React, {Component} from 'react';

export default class ContactUs extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <p className="lead">
                        Fell free to contact me for any work or suggesstions below
                    </p>
                </div>
                <div className="row">
                    <aside className="eigth colums footer-widgets">
                        <div className="widget">
                            <h4> Linked in :
                            {resumeData.linkedinId}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}