import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Command } from '../../models/Command'

@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.css'],
  providers: [DataService]
})
export class CommandFormComponent implements OnInit {
  command: Command = {
    body: '',
    status: 'unread',
    timeStamp: 0
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit firing. body: ');
    console.log(this.command.body);
    this.command.timeStamp = Date.now();
    this.dataService.addCommand(this.command);
    this.command.body = '';
  }
}
