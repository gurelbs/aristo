import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

export default function ShareBtn({data}) {

    const [value, setValue] = useState('')
    const [copy, setcopy] = useState(false)

    return (
        <>
        <div>
        <CopyToClipboard text={`http://aristo.cf/#/main/${data.title}`}
          onCopy={() => setcopy(true)}>
          <IconButton 
            aria-label="share"
            value={value}
            onChange={({target: {value}}) => {
            setValue(value)
            setcopy(false)
          }}>
            <ShareIcon />       
          </IconButton>
        </CopyToClipboard>
 
        {copy ? <span style={{color: 'darkblue'}}>קישור הועתק :)</span> : null}
      </div>

    </>
    )
}
