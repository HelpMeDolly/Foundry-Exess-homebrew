/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class ExaltedessenceItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    // Get the Item's data
    const itemData = this.data;
    const actorData = this.actor ? this.actor.data : {};
    const data = itemData.data;
  }

  async _preCreate(createData, options, userId) {
    if(createData.type == 'intimacy') {
      this.data.update({img: "icons/skills/social/diplomacy-handshake-yellow.webp"});
    }
    if(createData.type == 'spell') {
      this.data.update({img: "icons/svg/book.svg"});
    }
    if(createData.type == 'merit') {
      this.data.update({img: "icons/commodities/gems/gem-faceted-radiant-red.webp"});
    }
  }
  

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  async roll() {
    // Basic template rendering data
    const token = this.actor.token;
    const item = this.data;
    const actorData = this.actor ? this.actor.data.data : {};
    const itemData = item.data;

    // let roll = new Roll('d20+@abilities.str.mod', actorData);
    // let label = `Rolling ${item.name}`;
    // roll.roll().toMessage({
    //   speaker: ChatMessage.getSpeaker({ actor: this.actor }),
    //   flavor: label
    // });
  }
}
