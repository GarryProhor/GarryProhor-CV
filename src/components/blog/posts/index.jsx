import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import  './AddPost.css';

export const AddPost = () => {
    const imageUrl = '';
    const [value, setValue] = React.useState('');

    const handleChangeFile = () => {};

    const onClickRemoveImage = () => {};

    const onChange = React.useCallback((value) => {
        setValue(value);
    }, []);

    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '150px',
            autofocus: true,
            placeholder: 'Введите текст...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        [],
    );

    return (
        <Paper className='paper'>
            <div className='buttons'>
                <Button  variant="outlined" size="large">
                    Загрузить превью
                </Button>
            </div>
            <input type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                    Удалить
                </Button>
            )}
            {imageUrl && (
                <img className='image' src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
            )}
            <br />
            <br />
            <TextField
                className='title'
                variant="standard"
                placeholder="Заголовок статьи..."
                fullWidth
            />
            <TextField classes='tags' variant="standard" placeholder="Тэги" fullWidth color='secondary'/>
            <SimpleMDE className='editor' value={value} onChange={onChange} options={options} />
            <div className='buttons'>
                <Button size="large" variant="contained">
                    Опубликовать
                </Button>
            </div>
            <div className='buttons'>
                <Button size="large">Отмена</Button>
            </div>
        </Paper>
    );
};