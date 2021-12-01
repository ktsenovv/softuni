import { createItem } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit, errors, afterSubmit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.make ? ' is-invalid' : ' is-valid'))} id="new-make" type="text"
                    name="make">
                ${errors.make ? html`<div class="form-group error">${errors.make}</div>` : null}
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.model ? ' is-invalid' : ' is-valid'))} id="new-model" type="text"
                    name="model">
                ${errors.model ? html`<div class="form-group error">${errors.model}</div>` : null}
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.year ? ' is-invalid' : ' is-valid'))} id="new-year" type="number"
                    name="year">
                ${errors.year ? html`<div class="form-group error">${errors.year}</div>` : null}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.description ? ' is-invalid' : ' is-valid'))} id="new-description"
                    type="text" name="description">
                ${errors.description ? html`<div class="form-group error">${errors.description}</div>` : null}
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.price ? ' is-invalid' : ' is-valid'))} id="new-price" type="number"
                    name="price">
                ${errors.price ? html`<div class="form-group error">${errors.price}</div>` : null}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.img ? ' is-invalid' : ' is-valid'))} id="new-image" type="text"
                    name="img">
                ${errors.img ? html`<div class="form-group error">${errors.img}</div>` : null}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class=${'form-control' + (!afterSubmit ? '' : ' is-valid')} id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`;

export function createPage(ctx) {
    update();

    function update(errors = {}, afterSubmit = false) {
        ctx.render(createTemplate(onSubmit, errors, afterSubmit));
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const make = formData.get('make').trim();
        const model = formData.get('model').trim();
        const year = Number(formData.get('year').trim());
        const description = formData.get('description').trim();
        const price = Number(formData.get('price').trim());
        const img = formData.get('img').trim();
        const material = formData.get('material').trim();

        const data = { make, model, year, description, price, img, material };
        const errors = {};

        try {
            if (make.length < 4) {
                errors.make = 'Make must be at least 4 characters long!';
            }

            if (model.length < 4) {
                errors.model = 'Model must be at least 4 characters long!';
            }

            if (year < 1950 || year > 2050) {
                errors.year = 'Year must be between 1950 and 2050!';
            }

            if (description.length < 10) {
                errors.description = 'Description must be at least 10 characters long!';
            }

            if (price < 1) {
                errors.price = 'Price must be a positive number!';
            }

            if (img == '') {
                errors.img = 'Image is required!';
            }

            if (Object.values(errors).length > 0) {
                throw { errors };
            }

            const result = await createItem(data);
            event.target.reset();
            ctx.page.redirect('/details/' + result._id);
        } catch (err) {
            const messages = err.message || err.errors;
            update(messages, true);
        }
    }
}