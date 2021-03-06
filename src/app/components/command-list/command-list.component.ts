import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Command } from '../../models/Command';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css'],
  providers: [DataService]
})
export class CommandListComponent implements OnInit {
  commands: Command[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCommands().subscribe(commands => {
      this.commands = commands;
    })
  } 

  deleteCommand(event, command) {
    this.dataService.deleteCommand(command);
  }

  getFormattedDate(command) {
    return(command.timeStamp);
  }

  setBadgeClass(status) {
    if(status == 'unread') {
      return('badge badge-warning');
    } else if(status == 'complete') {
      return('badge badge-success');
    } else {
      return('badge badge-info');
    }
  }
}



